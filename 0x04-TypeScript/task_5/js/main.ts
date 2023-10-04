interface MajorCredits {
    credits: number;
    _majorCredits: number;
}
interface MinorCredits {
    credits: number;
    _minorCredits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1._majorCredits + subject2._majorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1._minorCredits + subject2._minorCredits;
}

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };