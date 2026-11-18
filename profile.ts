// === TypeScript (TS) - profile.ts ===
interface StudentProfile {
  studentId: string;
  name: string;
  faculty: string;
  major: string;
  year: number;
  displayInfo(): string;
}

const studentProfile: StudentProfile = {
  studentId: "66010001",
  name: "คาดาฟีร์ อาบ๊ะถ",
  faculty: "คณะวิทยาการจัดการ",
  major: "เทคโนโลยีดิจิทัลเพื่อธุรกิจ",
  year: 2,
  displayInfo(): string {
    return `[${this.studentId}] ${this.name} - ${this.major} (ปี ${this.year})`;
  }
};

console.log("=== ข้อมูลนักศึกษา (TypeScript) ===");
console.log(studentProfile.displayInfo());