export type CardProps = {
    id: string;
    titulo: string;
    concluida: boolean;
    onToggle: () => void;
    onDelete: () => void;
    onPress: () => void;
}