const handleNameValidade = async (value) => {
  const nameSplited = value.split(" ");
  if (nameSplited.length === 0 || nameSplited.length === 1) {
    return false;
  }
  return true;
};

const handleValidators = {
  handleNameValidade: handleNameValidade,
};

export { handleValidators };
