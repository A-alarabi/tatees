// تطعيس | TATEES
// غيّر الإعدادات وشوف وش يصير! | change the settings and see what happens!
tatees.setTimeOfDay(DayTime.Day)
tatees.setDuneHeight(118)
tatees.setEnginePower(75)
tatees.setSandGrip(0.7)
tatees.setCrashSpeed(105)
tatees.setFlagCount(12)
tatees.addBashingCars(3)
tatees.addCamels(6)
tatees.onRollover(function () {
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
})
tatees.start()
