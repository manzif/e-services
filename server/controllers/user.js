import model from '../models';
import { getMaxListeners } from 'cluster';

const { User } = model;

class Users {

    static list(req, res) {
        return User
          .findAll()
          .then(User => res.status(200).send(User));
    }
    // static listOne(req, res) {
    //     const id = req.params.id
    //     User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(user => {
    //             if (!user) {
    //                      .then(User=> res.status(201).send(User));
    //                     .catch(err => {
    //                         res.status(400).send('error' + err);
    //                     })
    //             }
    //             else {
    //                 res.status(409).json({ 
    //                     error: 'user already exist' })
    //             }
    //         })
    //         .catch(err => {
    //             res.status(400).send('error' + err);
    //             console.log(err)
    //         })
    // }
    static signUp(req, res) {
    const { fullname, email, password} = req.body
      return User
        .create({
          fullname,
          email,
          password
        })
        .then(userData => res.status(201).send({
          status: 201,
          message: 'User successfully created',
          userData
        })).catch((error) => {
          res.status(500).send({ status: 500, error: error.errors[0].message });
        })
    }
    static async DeleteUser(req,res){
        
        try {
            const id = parseInt(req.params.id);
            const {rows, rowCount} = await User.delete(id)
            if(rowCount == 0)
            return res.status(400).json({ status: 400, error: 'User does not exist Please check your id try Again!!' });
            return res.status(200).json({
                status:200,
                message:'User was successfuly deleted'
            })
        } catch (error) {
            return res.status(500).json({
                status:500,
                error
            })
        }
    }
  //   static async signin(req, res) {
  //     try {
  //         const findUser = await User.findOne({
  //           where: { email: req.body.email.toLowerCase(), password: req.body.password }
  //         });
  //         if (findUser.rowCount === 0) {
  //             return res.status(400).json({ status: 400, error: 'Incorrect username or password' });
  //         }
  //         else{
  //             return res.status(200).json({ status: 200, data: user.rows });
  //         }
  //     } catch (error) {
  //         return res.status(400).json({
  //             status: 400,
  //             error,
  //         });
  //     }
  // }
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
        error: `email or password is incorrect`
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