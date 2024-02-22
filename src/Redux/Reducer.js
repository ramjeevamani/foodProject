const initialState = {
  tabel_number: null,
};

export default function tablereducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SETTABLENUMBER":
      return { ...state, tabel_number: payload };
    case "RESETTABLENUMBER":
      return { ...state, tabel_number: null };
    default:
      return state;
  }
}
