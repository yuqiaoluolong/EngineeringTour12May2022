var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5472263997630584,
        "pitch": -0.11893226567298854,
        "fov": 1.5710962640673494
      },
      "linkHotspots": [
        {
          "yaw": -3.137979796481135,
          "pitch": 0.04330808874327374,
          "rotation": 0,
          "target": "1-out-of-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2694930870060865,
          "pitch": 0.015899274817376963,
          "title": "Lecture Theaters&nbsp;",
          "text": "LT?? inside"
        }
      ]
    },
    {
      "id": "1-out-of-engineering-auditorium",
      "name": "Out of Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14234175422508422,
        "pitch": -0.3173296204627061,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08566902441150503,
          "pitch": -0.007897261268993816,
          "rotation": 6.283185307179586,
          "target": "0-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7847626232390166,
          "pitch": -0.012258121611068873,
          "rotation": 0,
          "target": "2-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3261091568230583,
          "pitch": -0.3036149843097107,
          "title": "Statue",
          "text": "a statue built in front of the Engineering main building."
        }
      ]
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.08931818447901207,
        "pitch": -0.01805513019303895,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7221547294998079,
          "pitch": -0.0031984087761340874,
          "rotation": 0,
          "target": "1-out-of-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1583628311845331,
          "pitch": 0.20502495599015802,
          "title": "Welcome!",
          "text": "to the Faculty of Engineering!"
        }
      ]
    }
  ],
  "name": "Engineering Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
