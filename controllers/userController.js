const mongoose = require("mongoose");

exports.loginForm = (req, res) => {
  res.render("login", { title: "Login" });
};

exports.registerForm = (req, res) => {
  res.render("register", { title: "Register" });
};

exports.publishMenuForm = (req, res) => {
  res.render("publishMenuForm", { title: "publishMenu" });
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody("name");
  req.checkBody("name", "You must enter a restaurant name").notEmpty();
  req.checkBody("email", "That email is not valid").isEmail();
  req.sanitizeBody("email").normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });

  const errors = req.validationErrors();
  if (errors) {
    req.flash("error", errors.map(err => err.msg));
    res.render("register", {
      title: "Register",
      body: req.body,
      flashes: req.flash()
    });
    return;
  }
  next();
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody("name");
  req.checkBody("name", "You must enter item name").notEmpty();
  req.checkBody("price", "You must enter item price").notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    req.flash("error", errors.map(err => err.msg));
    res.render("register", {
      title: "Register",
      body: req.body,
      flashes: req.flash()
    });
    return;
  }
  next();
};