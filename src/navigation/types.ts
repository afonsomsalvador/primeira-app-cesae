import { Tarefa } from "../features/Tarefas/types";

export type RootStackParamList = {
  Home: undefined;
  Tarefas: undefined;
  Formulario: undefined;
  Perfil: undefined;
  Detalhes: { tarefa: Tarefa }
};