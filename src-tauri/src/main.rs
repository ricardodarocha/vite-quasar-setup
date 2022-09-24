#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

#[derive(Debug)]
struct Busca{
  valor: String}

#[tauri::command]
fn mensagem(invoke_message: String) -> String{
  let mensagem:&str = invoke_message.as_str();
  println!("Uma mensagem! {}", mensagem);
  format!("mensagem recebida{}", mensagem)
}

#[tauri::command]
fn buscar(param_busca: tauri::State<Busca>) -> String{
   println!("onChange(Busca)->{:?}", param_busca);
   // Todo: implementar o retorno com o resultado da busca
   return format!("Encontrado->{:?}", param_busca) 
}

fn main() {
  tauri::Builder::default()
    .manage(Busca{
     valor: "teste".to_string()})
    .invoke_handler(tauri::generate_handler![buscar, mensagem])
    .run(tauri::generate_context!())
    .expect("O sistema foi interrompido");
}