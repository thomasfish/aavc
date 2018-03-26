function playSound(clippath) {
  var sound = new Audio("clips/" + clippath);
  sound.play();
}

// Clips list
// i) game
// j) clip/group - [ icon path, character path, sound effect ]
// k) clip in group
var clips = [
  [ // pwaa
    [ //pw group
      [
        "pw1", "pw1", "hol", "wav"
      ],
      [
        "pw1", "pw1", "obj", "wav"
      ],
      [
        "pw1", "pw1", "tak", "wav"
      ]
    ],
    [
      "wp1", "wp", "obj", "wav"
    ],
    [
      "me1", "me1", "obj", "wav"
    ],
    [
      "mvk", "mvk", "obj", "wav"
    ]
  ],
  [ //jfa
    [ //pw group
      [
        "pw1", "pw1", "hol", "wav"
      ],
      [
        "pw1", "pw1", "obj", "wav"
      ],
      [
        "pw1", "pw1", "tak", "wav"
      ]
    ],
    [
      "wp1", "wp", "obj", "wav"
    ],
    [
      "fvk1", "fvk", "obj", "wav"
    ],
    [
      "me1", "me1", "obj", "wav"
    ]
  ],
  [ //t&t
    [ //mf group
      [
        "mf", "mf", "hol", "wav"
      ],
      [
        "mf", "mf", "obj", "wav"
      ],
      [
        "mf", "mf", "tak", "wav"
      ]
    ],
    [ //pw group
      [
        "pw1", "pw1", "hol", "wav"
      ],
      [
        "pw1", "pw1", "obj", "wav"
      ],
      [
        "pw1", "pw1", "tak", "wav"
      ]
    ],
    [ //me group
      [
        "me1", "me1", "hol", "wav"
      ],
      [
        "me1", "me1", "obj", "wav"
      ],
      [
        "me1", "me1", "tak", "wav"
      ]
    ],
    [
      "wp2", "wp", "obj", "wav"
    ],
    [
      "g", "g", "obj", "wav"
    ],
    [
      "fvk1", "fvk", "obj", "wav"
    ]
  ],
  [ //aj
    [ //aj group
      [
        "aj1", "aj1", "got", "wav"
      ],
      [
        "aj1", "aj1", "hol", "wav"
      ],
      [
        "aj1", "aj1", "obj", "wav"
      ],
      [
        "aj1", "aj1", "tak", "wav"
      ]
    ],
    [
      [
        "pw1", "pw1", "hol", "wav"
      ],
      [
        "pw1", "pw1", "obj", "wav"
      ],
      [
        "pw1", "pw1", "tak", "wav"
      ]
    ],
    [
      "wp3", "wp", "obj", "wav"
    ],
    [
      "krg", "krg", "obj", "wav"
    ],
    [
      "klg", "klg", "obj", "wav"
    ]
  ],
  [ //aai:me
    [
      [
        "me1", "me1", "eur", "wav"
      ],
      [
        "me1", "me1", "hol", "wav"
      ],
      [
        "me1", "me1", "obj", "wav"
      ],
      [
        "me1", "me1", "tak", "wav"
      ]
    ],
    [
      "jp", "jp", "obj", "wav"
    ],
    [
      "sll", "sll", "not", "wav"
    ],
    [
      "cy", "cy", "obj", "wav"
    ],
    [
      "qa", "qa", "obj", "wav"
    ]
  ],
  [ //dd
    [//pw group
      [
        "pwdd", "pw2", "hol", "mp3"
      ],
      [
        "pwdd", "pw2", "obj", "mp3"
      ],
      [
        "pwdd", "pw2", "tak", "mp3"
      ]
    ],
    [ //aj group
      [
        "ajdd", "aj2", "hol", "mp3"
      ],
      [
        "ajdd", "aj2", "obj", "mp3"
      ],
      [
        "ajdd", "aj2", "tak", "mp3"
      ]
    ],
    [ //ac group
      [
        "acdd", "ac", "hol", "mp3"
      ],
      [
        "acdd", "ac", "obj", "mp3"
      ],
      [
        "acdd", "ac", "tak", "mp3"
      ]
    ],
    [
      "gpdd", "gp", "obj", "mp3"
    ],
    [
      "sbdd", "sb", "obj", "mp3"
    ],
    [
      "klgdd", "klg2", "obj", "mp3"
    ],
    [
      "medd", "me2", "obj", "mp3"
    ]
  ]
];

var gametitles = [
  "Phoenix Wright: Ace Attorney",
  "Ace Attorney: Justice for All",
  "Ace Attorney: Trials and Tribulations",
  "Apollo Justice: Ace Attorney",
  "Ace Attorney Investigations: Miles Edgeworth",
  "Ace Attorney: Dual Destinies"
];

var screamnames = {
  obj: "Objection",
  hol: "Hold It",
  tak: "Take That",
  eur: "Eureka",
  got: "Gotcha"
};


for (var game = 0; game < clips.length; game++) {
  var newtabtext = document.createTextNode(gametitles[game]);

  var newtab = document.createElement("h3");
  newtab.appendChild(newtabtext);
  newtab.className = "tab";

  var main = document.getElementsByTagName("main")[0];
  main.appendChild(newtab);


  var newpanel = document.createElement("div");
  newpanel.className = "panel";

  for (var clipgroup = 0; clipgroup < clips[game].length; clipgroup++) {
    console.log(clipgroup);
    if (typeof clips[game][clipgroup][0] !== "string") {  // Checks if group or not.

      var newgroup = document.createElement("div");
      newgroup.className = "group";

      for (var clip = 0; clip < clips[game][clipgroup].length; clip++) {
        var newsubtitletext = document.createTextNode(screamnames[clips[game][clipgroup][clip][2]]);

        var newsubtitle = document.createElement("h5");
        newsubtitle.appendChild(newsubtitletext);

        var newicon = document.createElement("div");
        newicon.className = "icon";
        newicon.style.backgroundImage = "url('chars/" + clips[game][clipgroup][clip][0] + ".png')";
        newicon.dataset.url = clips[game][clipgroup][clip][1] + clips[game][clipgroup][clip][2] + "." + clips[game][clipgroup][clip][3];
        newicon.onclick = function() {
          playSound(this.dataset.url);
        };
        newicon.appendChild(newsubtitle);

        newgroup.appendChild(newicon);
      }

      newpanel.appendChild(newgroup);

    } else {
      var newicon = document.createElement("div");
      newicon.className = "icon";
      newicon.style.backgroundImage = "url('chars/" + clips[game][clipgroup][0] + ".png')";
      newicon.dataset.url = clips[game][clipgroup][1] + clips[game][clipgroup][2] + "." + clips[game][clipgroup][3];
      newicon.onclick = function() {
        playSound(this.dataset.url);
      };

      newpanel.appendChild(newicon);
    }
  }
  main.appendChild(newpanel);
}




var tabtext = document.getElementsByClassName("tab");

for (var i = 0; i < tabtext.length; i++) {
  tabtext[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
