
export const signin = function (user, success, error) {
  $.ajax ({
    method: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const signout = function (success){
  $.ajax({
    method: 'DELETE',
    url:'api/session',
    success,
    error: () => {
		  console.log("Signout error in SessionApiUtil#sign_out");
		}
  });
};
