
function get_free_id(array) {
  free_id = 1;
  for (var i = 0; array[i]; i++)
  {
    if (array[i]._id >= free_id)
      free_id = array[i]._id + 1;
  }
  return free_id;
}

module.exports = {get_free_id};
