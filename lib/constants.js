const Constants = {
  //account type
  AccountType: {
    Client: 0,
    Tutor: 1,
    Admin: 2,
  },
  Service: {
    OneOnOneTutorial: 0,
    CSCExamReview: 1,
    PSHSExamReview: 2,
    CEExamReview: 3,
  },
  Services: [
    'One On One Tutorial',
    'Civil Service Comission Exam Review',
    'Philippine Science High School Entrance Exam Review',
    'College Entrance Exam Review',
  ],
};

module.exports = Constants;
