class Student {
  name;
  surname;
  yearOfBirth;
  marks = [];
  attendance = [];
  courses = [];
  avrScore;
  avrAttendance;

  constructor(name, surname, yearOfBirth, course) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.courses = [course];
  }

  addMark(mark) {
    if (!isNaN(mark) && mark > 0 && mark <= 100) {
      let toNum = Number(mark);
      this.marks.push(toNum);
    } else {
      console.log("некорректный ввод оценки")
    }
  }

  getAverageScore() {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let length = this.marks.length;
    this.avrScore = (sum / length).toFixed(2)
    return this.avrScore;
  };

  getAverageAttendance() {
    let sum = this.attendance.reduce((acc, number) => acc + number, 0);
    let length = this.attendance.length;
    this.avrAttendance = (sum / length * 100).toFixed(2);
    return this.avrAttendance;
  }

  getAmountOfattendedSessions() {
    let attendetSessions = 0;
    this.attendance.forEach((el) => {
      if (el) {
        attendetSessions++;
      }
    });
    return attendetSessions;
  }

  present() {
    this.attendance.push(true);
  };
  absent() {
    this.attendance.push(false);
  };

  getInfo() {
    let objInf = {
      name: this.name,
      surname: this.surname,
      yearOfBirth: this.yearOfBirth,
      marks: this.marks,
      attended: this.getAmountOfattendedSessions(),
      courses: this.courses,
    }
    return objInf;
  }

  addCourse(course) {
    this.courses.push(course);
  }
  delCourse(course) {
    this.courses.splice((this.courses.indexOf(course)), 1);
  }
}




//1st student
let st1 = new Student("Ivan", "Ivanov", 2002, "mathematics");
console.log(st1)

st1.addMark(65);
st1.addMark(65);
st1.addMark(60);
st1.addMark(60);

st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();

console.log(`Средняя оценка ${st1.name} ` + st1.getAverageScore());
console.log(`Количество посещенных занятий ${st1.name} ` + st1.getAmountOfattendedSessions())
console.log(`Средняя посещаемость ${st1.name} ` + st1.getAverageAttendance() + "%")
console.log(st1.getInfo());
st1.addCourse("physics");
st1.delCourse("physics");
st1.addCourse("physical education");



//group

class Group {
  listOfStudents;

  constructor(...args) {
    this.listOfStudents = args;
  }

  //добавление и удаление студентов
  addStudent(student) {
    this.listOfStudents.push(student);
  }

  delStudent(student) {
    this.listOfStudents.splice((this.listOfStudents.indexOf(student)), 1);
  }

  //сортировка по успеваемости
  markRate() {
    let ratedArrMarks = this.listOfStudents.sort((a, b) => (+b.avrScore) - (+a.avrScore));
    for (let i = 0; i < ratedArrMarks.length; i++) {
      console.log("Рейтинг учеников по успеваемости " + ratedArrMarks[i].name + ' - ' + ratedArrMarks[i].avrScore);
    }

  }

  attRate() {
    let ratedArrAtt = this.listOfStudents.sort((a, b) => (+b.avrAttendance) - (+a.avrAttendance));
    for (let i = 0; i < ratedArrAtt.length; i++) {
      console.log("Рейтинг учеников по посещаемости " + ratedArrAtt[i].name + ' - ' + ratedArrAtt[i].avrAttendance);
    }

  }
}

//2nd student
let st2 = new Student("Vova", "Ivanov", 2005, "mathematics");

st2.absent();
st2.present();
st2.absent();
st2.present();
st2.absent();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.absent();

st2.addMark(10);
st2.addMark(65);
st2.addMark(60);
st2.getAverageScore();
st2.getAverageAttendance();

//3rd student
let st3 = new Student("Peter", "Ivanov", 2007, "mathematics");

st3.present();
st3.absent();
st3.present();
st3.absent();
st3.present();
st3.absent();
st3.present();
st3.absent();
st3.present();
st3.absent();


st3.addMark(67);
st3.addMark(65);

st3.getAverageScore();

st3.getAverageAttendance();

//group1
let group1 = new Group(st1, st2);
group1.addStudent(st3);
group1.markRate();
group1.attRate();

