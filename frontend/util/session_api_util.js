
const sign_in = function (user, success, error) {
  $.ajax ({
    method: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};

const sign_out = function (success){
  $.ajax({
    method: 'DELETE',
    url:'api/session',
    success,
    error: () => {
		  console.log("Logout error in SessionApiUtil#sign_out");
		}
  });
};
