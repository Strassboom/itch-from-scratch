var nodes = {"a":{"position":[50,50],"children":{"b":{"speed":1.0},"c":{"speed":1.0},"d":{"speed":1.0}}},
            "b":{"position":[100,200],"children":{"a":{"speed":1.0},"c":{"speed":1.0},"e":{"speed":1.0}}},
            "c":{"position":[50,300],"children":{"a":{"speed":1.0},"b":{"speed":1.0},"d":{"speed":1.0}}},
            "d":{"position":[400,400],"children":{"a":{"speed":0.5},"c":{"speed":1.0},"e":{"speed":1.0}}},
            "e":{"position":[200,300],"children":{"b":{"speed":1.0},"d":{"speed":1.0}}}};

var startPoint = "a"