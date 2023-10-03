function getListStudentsIds(array) {
  if (!Array.isArray(array)) { return []; }
  return array.map((item) => item.id);
}

export default getListStudentsIds;
