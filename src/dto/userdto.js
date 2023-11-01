

export  default  class UserDto {
     username;
     email;
     id;
     roles;

     constructor(model) {
          this.email = model.email
          this.username = model.username
          this.id = model.id
          this.roles = model.roles
     }
}