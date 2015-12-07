// jscs:disable
require([
        "models/StudentModel",
        "views/StudentView"
    ],
    function(StudentModel, StudentView) {

        var studentModel = new StudentModel({collage: "SJSU"}), studentView = new StudentView({model: studentModel});
        studentView.render();

    });