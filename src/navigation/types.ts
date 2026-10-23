import { Tarefa } from "../features/Tarefas/types";

export type RootStackParamList = {
  Home: undefined;
  Tarefas: undefined;
  Formulario: undefined;
  Detalhes: { tarefa: Tarefa }
};