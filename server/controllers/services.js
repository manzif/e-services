import model from '../models';
import { read } from 'fs';

const { Service } = model;

class Services {
  static list(req, res) {
    return Service.findAll().then(services => {
      services.map(service => {
        service.dataValues.title = service.dataValues.title;
        service.dataValues.company = service.dataValues.company;
        service.dataValues.description = service.dataValues.description;
        service.dataValues.image =
          req.protocol +
          '://' +
          req.headers.host +
          '/uploads/' +
          service.dataValues.image;
      });
      res.status(200).send(services);
    });
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
  static post(req, res) {
    const { title, company, description } = req.body;
    const image = req.file ? req.file.filename : null;
    return Service.create({
      title,
      company,
      description,
      image
    })
      .then(serviceData => {
        const result = {
          title: serviceData.title,
          company: serviceData.company,
          description: serviceData.description,
          image:
            req.protocol +
            '://' +
            req.headers.host +
            '/uploads/' +
            serviceData.image
        };
        res.status(201).send({
          status: 201,
          message: 'Service successfully created',
          result
        });
      })
      .catch(error => {
        res.status(500).send({ status: 500, error: 'Internal Server Error' });
      });
  }
  static async DeleteService(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { rows, rowCount } = await Service.delete(id);
      if (rowCount == 0)
        return res.status(400).json({
          status: 400,
          error: 'Service does not exist Please check your id try Again!!'
        });
      return res.status(200).json({
        status: 200,
        message: 'Service was successfuly deleted'
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error
      });
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
}

export default Services;
