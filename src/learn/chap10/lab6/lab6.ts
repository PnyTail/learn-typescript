export { };
//lab 6

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number;
}

type TCourse = {
    courseId: number;
    title: string;
    price: number;
    students: TStudent[];
}

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
    console.log("Thêm học viên vào danh sách khoá học: ", course.title);
    course.students.push(student);
    console.log(`Thêm thành công học viên ${student.name} vào khoá học: ${course.title}`);
}

const printCourseInfo = (course: TCourse) => {
    const quantityStudentInCourse = course.students.length;
    console.log(`Tên khoá học: ${course.title}`);
    if (quantityStudentInCourse > 0) {
        console.log(`Số học viên đã đăng ký: ${quantityStudentInCourse}`);
        const studentList = course.students.map(student => student.name);
        console.log("Danh sách từng học viên: ", studentList.join(", "));
    } else {
        console.log("Chưa có học viên nào!");
    }

    return;
}

const main = () => {
    const student1: TStudent = {
        id: 12,
        name: "Nguyễn Văn An",
        email: "NVA@gmail.com",
        isPremium: true,
        contact: 901234567
    }

    const student2: TStudent = {
        id: 15,
        name: "Trần Thị Bích",
        email: "TTB@gmail.com",
        isPremium: false,
        contact: "912345678"
    }

    const learnJavaScript: TCourse = {
        courseId: 21,
        title: "Học JavaScript",
        price: 248,
        students: []
    }

    const learnTypeScript: TCourse = {
        courseId: 212,
        title: "Học TypeScript",
        price: 2489,
        students: []
    }

    printCourseInfo(learnJavaScript);
    console.log("=============")
    printCourseInfo(learnTypeScript);
    console.log("=============")
    registerStudentToCourse(student1, learnTypeScript);
    console.log("=============")
    printCourseInfo(learnJavaScript);
    console.log("=============")
    printCourseInfo(learnTypeScript);
    console.log("=============")
    registerStudentToCourse(student2, learnTypeScript);
    console.log("=============")
    printCourseInfo(learnJavaScript);
    console.log("=============")
    printCourseInfo(learnTypeScript);
}

main();