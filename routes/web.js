const express = require('express')
const frontcontroller = require('../controllers/frontcontroller')
const coursecontroller = require('../controllers/coursecontroller')
const usercontroller = require('../controllers/user/usercontroller')
const aboutmiddleware = require('../middleware/aboutmiddleware')
const {checkuserauth,AuthRole} = require('../middleware/authentication')
const admincontroller = require('../controllers/admin/admincontroller')
const contactcontroller = require('../controllers/contactcontroller')

const router = express.Router()

router.get('/',usercontroller.index)
router.get('/register',usercontroller.register)
router.post('/registerinsert',usercontroller.registerinsert)
router.post('/verifylogin',usercontroller.verify)
router.get('/logout',usercontroller.logout)

router.get('/user/home',checkuserauth,frontcontroller.homepage)
router.get('/user/about',checkuserauth,frontcontroller.aboutpage)
router.get('/user/faculty',checkuserauth,frontcontroller.facultypage)
router.get('/user/courses',checkuserauth,frontcontroller.coursepage)
router.get('/user/contact',checkuserauth,frontcontroller.contactpage)

router.get('/course/courseregister',checkuserauth,coursecontroller.courseregister)
router.get('/course/mcaregister',checkuserauth,coursecontroller.mcaregister)
router.get('/course/mbaregister',checkuserauth,coursecontroller.mbaregister)
router.post('/course/courseinsert',checkuserauth,coursecontroller.courseinsert)
router.get('/userdetail/displaydashboard',checkuserauth,coursecontroller.coursedisplay)
router.get('/detail/view/:id',checkuserauth,coursecontroller.courseview)
router.get('/detail/edit/:id',checkuserauth,coursecontroller.courseedit)
router.post('/detail/updatedetail/:id',coursecontroller.courseupdate)
router.get('/detail/delete/:id',checkuserauth,coursecontroller.deletedata)

router.get('/admin/dashboard',checkuserauth,AuthRole('admin'),admincontroller.dashboard)
router.get('/admin/dashboard/detail',checkuserauth,admincontroller.displaydata)
router.get('/admin/dashboard/displayuser',checkuserauth,admincontroller.displayregisteruser)

router.post('/user/contactinsert',checkuserauth,contactcontroller.contactinsert)
router.get('/admin/dashboard/displaycontact',checkuserauth,contactcontroller.displaycontact)
router.get('/admin/dashboard/view/:id',checkuserauth,contactcontroller.viewcontact)

module.exports = router;