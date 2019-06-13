'use strict';
const Message = require('../models/message');
const User = require('../models/user');
const Event = require('../models/event');
const Group = require('../models/group');
const UserHistory = require('../models/userHistory');
const CarInfo = require('../models/carInfo');
const CarMakes = require('../models/carMakes');
const ContactSales = require('../models/contactSales');
const Promotions = require('../models/promotions');
const Purchases = require('../models/purchases');
const Sales = require('../models/sales');
const Services = require('../models/services');
const ShowRoom = require('../models/showRoom');
const Staff = require('../models/staffs');
const Suppliers = require('../models/suppliers');

class DataModel {
  constructor() {}

  add(req, res) {
    console.log(`adding ${this.name}`);
  }

  delete(req, res) {
    console.log(`deleting ${this.name}`);
  }

  update(req, res) {
    console.log(`updating ${this.name}`);
  }
}

class CmsShowRoomDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'cmsShowRoom';
  }

  async add(req, res) {
    console.log(`adding ${this.name}`);
    let data = req.body;
    if (data.hasOwnProperty('_id')) {
      delete data['_id'];
    }
    let showRoom = new ShowRoom(data);
    let ret = await showRoom.save();
    let obj = ret;
    res.status(200).json(obj);
  }

  async update(req, res) {
    console.log(`updating ${this.name}`, req.body._id);
    let data = req.body;
    let id = data._id;
    let ret = await ShowRoom.update({ _id: id }, data);

    res.status(200).json(ret);
  }

  async remove(req, res) {
    console.log(`removing ${this.name} with ${req.body._id}`);
    let data = req.body;
    let id = data._id;

    let ret = await ShowRoom.remove({ _id: id });

    res.status(200).json(ret);
  }

  async findAll(req, res) {
    console.log(`finding ${this.name}`);

    let ret = await ShowRoom.find();

    res.status(200).json(ret);
  }
}

class CmsCarInfoDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'cmsCarInfo';
  }

  async add(req, res) {
    console.log(`adding ${this.name}`);
    let data = req.body;
    if (data.hasOwnProperty('_id')) {
      delete data['_id'];
    }
    let carInfo = new CarInfo(data);
    let ret = await carInfo.save();
    let obj = ret;
    res.status(200).json(obj);
  }

  async update(req, res) {
    console.log(`updating ${this.name}`, req.body._id);
    let data = req.body;
    let id = data._id;
    let ret = await CarInfo.update({ _id: id }, data);

    res.status(200).json(ret);
  }

  async findAll(req, res) {
    console.log(`finding ${this.name}`);

    let ret = await CarInfo.find();

    res.status(200).json(ret);
  }

  async search(req, res) {
    console.log(`finding ${this.name}`);
    console.log(req.body);

    let ret = await CarInfo.find(req.body);

    res.status(200).json(ret);
  }

  async remove(req, res) {
    console.log(`removing ${this.name} with ${req.body._id}`);
    let data = req.body;
    let id = data._id;

    let ret = await CarInfo.remove({ _id: id });

    res.status(200).json(ret);
  }
}

class CarMakesDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'carMakes';
    this.init();
  }

  async init() {
    let carModels = require('../models/car-models.json');
    let ret = await CarMakes.find();
    console.log('carMakes:', ret.length);
    if (ret && ret.length === 0) {
      await CarMakes.collection.insert(carModels);
    }
  }

  async findAll(req, res) {
    console.log(`finding ${this.name}`);

    let ret = await CarMakes.find();

    res.status(200).json(ret);
  }
}

new CarMakesDataModel();

class MessageDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'message';
  }

  async findAll(req, res) {
    console.log('finding all messages');
    let message = new Message();
    let ret = await Message.find({ status: 'active' });
    let results = [];
    ret.forEach((r) => {
      let obj = { id: r.id, message: r.message, createdBy: r.createdBy, createdOn: r.createdOn };
      results.push(obj);
    });

    res.status(200).json(results);
  }
  async add(req, res) {
    console.log(`adding ${this.name}`);
    let data = { message: req.body.msg, createdBy: req.body.by, status: 'active' };
    let message = new Message(data);
    let ret = await message.save();
    let obj = { id: ret.id, message: ret.message, createdBy: ret.createdBy, createdOn: ret.createdOn };
    res.status(200).json(obj);
  }

  async remove(req, res) {
    console.log(`deleting ${this.name}`);
    let id = req.body.id;
    let ret = await Message.deleteOne({ _id: id });

    res.status(200).json({ ret });
  }

  update(req, res) {
    console.log(`updating ${this.name}`);
  }
}

class EventDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'event';
  }

  async findAll(req, res) {
    console.log('finding all events');
    let ret = await Event.find({ status: 'active' });
    let results = [];
    ret.forEach((r) => {
      let obj = { id: r._id, content: r.content, createdBy: r.createdBy, createdOn: r.createdOn };
      results.push(obj);
    });

    res.status(200).json(results);
  }

  async add(req, res) {
    console.log(`adding ${this.name}`);
    let data = { content: req.body.content, createdBy: req.body.by, status: 'active' };
    let event = new Event(data);
    let ret = await event.save();
    let obj = { id: ret._id, content: ret.content, createdBy: ret.createdBy, createdOn: ret.createdOn };
    res.status(200).json(obj);
  }

  async remove(req, res) {
    console.log(`deleting ${this.name}`);
    let id = req.body.id;
    let ret = await Event.deleteOne({ _id: id });

    res.status(200).json({ ret });
  }

  update(req, res) {
    console.log(`updating ${this.name}`);
    let id = req.body.id;
  }
}

class GroupDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'group';
  }

  async findAll(req, res) {
    console.log('finding all groups');
    let ret = await Group.find({ status: 'active' });
    let results = [];
    ret.forEach((r) => {
      let obj = {
        id: r._id,
        name: r.name,
        description: r.description,
        start: r.start,
        destination: r.destination,
        members: r.members,
        createdBy: r.createdBy,
        createdOn: r.createdOn,
      };
      results.push(obj);
    });

    res.status(200).json(results);
  }

  async add(req, res) {
    console.log(`adding ${this.name}`);
    let data = {
      name: req.body.name,
      description: req.body.description,
      start: req.body.start,
      destination: req.body.destination,
      members: [req.body.by],
      createdBy: req.body.by,
      status: 'active',
    };
    let group = new Group(data);
    let ret = await group.save();
    let obj = {
      id: ret._id,
      name: ret.name,
      description: ret.description,
      start: ret.start,
      destination: ret.destination,
      members: ret.members,
      createdBy: ret.createdBy,
      createdOn: ret.createdOn,
      user: ret.createdBy,
    };
    res.status(200).json(obj);
  }

  async remove(req, res) {
    console.log(`deleting ${this.name}`);
    let id = req.body.id;
    let ret = await Group.deleteOne({ _id: id });

    res.status(200).json({ ret });
  }

  async update(group) {
    console.log(`updating ${this.name}`);

    return await Group.update({ _id: group._id }, group);
  }

  async join(req, res) {
    console.log(`joining ${this.name}`);
    let id = req.body.idGroup;
    let user = req.body.user;

    let ret = await Group.find({ _id: id });

    if (ret && ret.length > 0) {
      ret = ret[0];
      ret.members.push(user);
    }

    await this.update(ret);

    res.status(200).json({ ret });
  }

  async quit(req, res) {
    console.log(`quit ${this.name}`);
    let id = req.body.idGroup;
    let user = req.body.user;

    let ret = await Group.find({ _id: id });
    if (ret && ret.length > 0) {
      ret = ret[0];
      ret.members.splice(ret.members.findIndex((e) => e === user), 1);
    }

    await this.update(ret);

    res.status(200).json({ ret });
  }
}

class UserDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'user';
  }

  add(req, res) {
    console.log(`adding ${this.name}`);
  }

  delete(req, res) {
    console.log(`deleting ${this.name}`);
  }

  update(req, res) {
    console.log(`updating ${this.name}`);
  }

  async findAllToday(req, res) {
    console.log('finding all users which login today');
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let ret = await User.find({ status: 'active', lastLogin: { $gt: today } });
    let results = [];
    ret.forEach((r) => {
      let obj = {
        username: r.username,
        name: r.name,
        createdBy: r.createdBy,
        createdOn: r.createdOn,
        lastLogin: r.lastLogin,
      };
      results.push(obj);
    });

    res.status(200).json(results);
  }

  async findAll(req, res) {
    console.log('finding all users');
    let ret = await User.find({ status: 'active' });
    let results = [];
    ret.forEach((r) => {
      let obj = {
        username: r.username,
        name: r.name,
        createdBy: r.createdBy,
        createdOn: r.createdOn,
        lastLogin: r.lastLogin,
      };
      results.push(obj);
    });

    res.status(200).json(results);
  }

  async register(req, res) {
    console.log(`register ${req.body}`);
    let userObj = req.body;
    userObj.name = userObj.firstName + ' ' + userObj.lastName;

    let ret = await User.find({ username: userObj.username });
    if (ret && ret.length > 0) {
      res.status(500).send({ error: 'username exists' });
    }

    let user = new User(userObj);
    try {
      ret = await user.save();
    } catch (err) {
      console.log(err);
    }
    delete userObj.password;

    let userHisData = { username: userObj.username, name: userObj.name, event: 'join', location: userObj.location };
    await new UserHistory(userHisData).save();
    res.status(200).json({ message: 'successfully registered', userObj });
  }

  async login(req, res) {
    console.log(`login as ${req.body}`);
    let userObj = req.body;
    let ret = await User.find({ username: userObj.username });
    if (ret && ret.length > 0) {
      ret = ret[0];
      if (userObj.password === ret.password) {
        await User.findByIdAndUpdate({ _id: ret._id }, { $set: { lastLogin: new Date() } });
        delete userObj.password;
        let userHisData = {
          username: userObj.username,
          name: userObj.name,
          event: 'login',
          location: userObj.location,
        };
        await new UserHistory(userHisData).save();

        res.status(200).json({ message: 'success to login', userObj });
      } else {
        res.status(401).json({ error: 'cannot login' });
      }
    } else {
      let user = new User(userObj);
      ret = await user.save();
      delete userObj.password;

      let userHisData = { username: userObj.username, name: userObj.name, event: 'join', location: userObj.location };
      await new UserHistory(userHisData).save();
      res.status(200).json({ message: 'succeed login', userObj });
    }
  }

  async logout(req, res) {
    console.log(`logout ${req.body}`);
    let name = req.body.user;
    let userHisData = { username: name, name: name, event: 'logout', location: req.body.location };
    await new UserHistory(userHisData).save();
    res.status(200).json({ message: 'success to logout', userObj: req.body });
  }

  async findHistoryToday(req, res) {
    let his = await new UserHistoryDataModel().findAllToday();
    let ret = [];

    his.forEach((h) => {
      let obj = {
        name: h.name,
        username: h.username,
        eventTime: h.eventTime,
        event: h.event,
        location: h.location,
      };
      ret.push(obj);
    });

    res.status(200).json(ret);
  }
}

class UserHistoryDataModel extends DataModel {
  constructor() {
    super();
    this.name = 'userHistory';
  }

  async append(event) {
    let model = new UserHistory(event);
    await model.save();
  }

  async deleteAll() {
    await UserHistory.deleteAll();
  }

  async findAllToday() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return await UserHistory.find({ eventTime: { $gt: today } }).sort({ eventTime: -1 });
  }
}

function routeCtl(req, res) {
  console.log('control: ', req.baseUrl, req.path, req.body);
  let name = req.baseUrl.substr(1);
  console.log('name:', name);
  let obj;
  switch (name) {
    case 'cms/carmake': {
      obj = new CarMakesDataModel(req, res);
      break;
    }
    case 'cms/carinfo': {
      obj = new CmsCarInfoDataModel(req, res);
      break;
    }
    case 'cms/showroom': {
      obj = new CmsShowRoomDataModel(req, res);
      break;
    }
    case 'message': {
      obj = new MessageDataModel(req, res);
      break;
    }
    case 'event': {
      obj = new EventDataModel(req, res);
      break;
    }
    case 'user': {
      obj = new UserDataModel(req, res);
      break;
    }
    case 'group': {
      obj = new GroupDataModel(req, res);
      break;
    }
  }

  let command = req.path.substr(1);
  if (command === '') {
    command = 'findAll';
  }

  return obj[command](req, res);
}
module.exports = routeCtl;
