import model from '../models';

const { User } = model;

class Users {

    static list(req, res) {
        return User
          .findAll()
          .then(User => res.status(200).send(User));
    }

    static async signUp(req, res) {
    try{  
    const user = {
       fullname: req.body.fullname, 
       email :req.body.email, 
       password : req.body.password
      } 
      const findUser = await User.findOne({
        where: { email: req.body.email }
      });
        if (!findUser) {
          User.create(user)
          return res.status(201).json({
            status:201,
            message:'User was successfuly created. Thank you'
        });
        }else{
          return res.status(202).json({
            message: 'The user with the same email already exists. Please Try again!!'
          });
        }
        }catch(error) {
          res.status(500).send({ status: 500, error: error.errors[0].message });
        }
    }

    static async DeleteUser(req,res){
        try {
            const id = parseInt(req.params.id);
            const findUser = await User.findOne(
              { where: { id: id}}
            );
            if(findUser){
            await User.destroy({where:
            {id:id}})
            return res.status(200).json({
                status:200,
                message:'User was successfuly deleted'
            });
          }
            return res.status(400).json({
              status: 400,
              error: `User does not exist or already deleted`
            });
          } catch (error) {
            return res.status(500).json({
                status:500,
                error
            }) 
          }
    }

  static async signin(req, res) {
    try {
      const findUser = await User.findOne({
        where: { email: req.body.email, password:req.body.password}
      });

      if (findUser) {
        const {
          id,
          fullname,
          email,
          password
        } = findUser;
        const userData = {
          id,
          fullname,
          email,
          password,
        };
        return res.status(200).json({
          status: 200,
          data:   findUser
        });
      }
      return res.status(404).json({
        status: 404,
        error: `email or password is incorrect. Please check and try again`
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: "internal server error! please try again later"
      });
    }
  }
}

export default Users;