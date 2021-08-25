class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum/this.scores.length;
    }
}

const student1 = new Student('Emil', 'Katz', 14);
console.log(student1);
console.log(student1.firstName);
console.log(student1.markLate());
console.log(student1.markLate());

student1.addScore(10);
student1.addScore(3);
console.log(student1.calculateAverage());
