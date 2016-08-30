
export const sign_up = function (user, success, error ){
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const updateUser = function (user, success, error){
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: user,
    success,
    error
  });
};

export const fetchUsers = function(success, error){
  // TODO: add filters
  $.ajax({
    method:'GET',
    url: 'api/users',
    success,
    error
  });
};

export const fetchSingleUser = function(user, success, error){
  $.ajax({
    method:'GET',
    url: `api/users/${user.id}`,
    success,
    error
  });
};
