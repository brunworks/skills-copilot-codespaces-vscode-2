function skillsMember() {
    var member = this;
    member.skills = [];
    member.addSkill = function (skill) {
        member.skills.push(skill);
    };
    member.addSkill('JavaScript');
    member.addSkill('HTML');
    member.addSkill('CSS');
    return member;
}