
const sign_up = function (user, success, error ){
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

const update = function (user, success, error){
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: user,
    success,
    error
  });
};

const fetchUsers = function(success, error){
  // TODO: add filters
  $.ajax({
    method:'GET',
    url: 'api/users',
    success,
    error
  });
};

const fetchSingleUser = function(user, success, error){
  $.ajax({
    method:'GET',
    url: `api/users/${user.id}`,
    success,
    error
  });
};
