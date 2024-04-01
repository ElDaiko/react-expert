const saludar = function (nombre) {
  return `hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};

const saludar3 = (nombre) => `hola, ${nombre}`;

console.log(saludar("Miguel"));
console.log(saludar2("Miguel2"));
console.log(saludar3("Miguel3"));

const getUser = () => ({
  uid: "ABC123",
  username: "Miguel",
});

const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioactivo = getUsuarioActivo("Miguel");

console.log(usuarioactivo);
