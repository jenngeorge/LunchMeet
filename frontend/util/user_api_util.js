
export const signup = function (user, success, error ){
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
    data: {user: user},
    success,
    error
  });
};

export const fetchUsers = function(filters, success){
  $.ajax({
    method:'GET',
    url: 'api/users',
    data: filters,
    success
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
