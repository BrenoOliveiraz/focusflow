import Svg, { Path } from 'react-native-svg';
import { FontAwesome, Feather } from '@expo/vector-icons';

// ▶️ Ícone personalizado em SVG
export const IconPlay = () => (
  <Svg width="11" height="14" viewBox="0 0 11 14" fill="none">
    <Path d="M0.015625 0.015625L10.9844 7L0.015625 13.9844V0.015625Z" fill="white" />
  </Svg>
);

// ⏸️ Ícone personalizado em SVG
export const IconPause = () => (
  <Svg width="12" height="14" viewBox="0 0 12 14" fill="none">
    <Path d="M8.01562 0.015625H12V13.9844H8.01562V0.015625ZM0 13.9844V0.015625H3.98438V13.9844H0Z" fill="white" />
  </Svg>
);

// ✔️ Check — cor muda conforme o estado
export const IconCheck = ({ completed = false, size = 22 }) => (
  <FontAwesome
    name="check-circle"
    size={size}
    color={completed ? "#00F4BF" : "white"}
  />
);

// 🗑️ Trash (lixeira)
export const IconTrash = ({ size = 16, color = "white" }) => (
  <Feather
    name="trash-2" // alternativa: FontAwesome "trash"
    size={size}
    color={color}
  />
);

// ✏️ Pencil (editar)
export const IconPencil = ({ size = 16, color = "white" }) => (
  <Feather
    name="edit-2" // alternativa: FontAwesome "pencil"
    size={size}
    color={color}
  />
);

export const IconPlus = ({ size = 20, color = "#B872FF" }) => (
  <Feather
    name="plus"
    size={size}
    color={color}
  />
);

// 💾 Save (salvar)
export const IconSave = ({ size = 20, color = "black" }) => (
  <Feather
    name="save"
    size={size}
    color={color}
  />
);

