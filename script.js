// Token — replaced by GitHub Actions on deploy
mapboxgl.accessToken = '';

// ── Color scheme by type ──────────────────────────────────────────────────
const TYPE_CONFIG = {
  subway: { color: '#0039A6', label: 'Accessible Subway' },
  ferry:  { color: '#0098C3', label: 'Ferry Terminal'    },
  taxi:   { color: '#d4a000', label: 'WAV Taxi / Rideshare' },
  aar:    { color: '#C0392B', label: 'Access-A-Ride'     }
};

// ── Location data ─────────────────────────────────────────────────────────
const locations = [

  // ── ACCESSIBLE SUBWAY STATIONS ──
  {
    type: 'subway',
    name: 'Grand Central – 42 St',
    address: '42nd St & Park Ave, Manhattan',
    coordinates: [-73.9772, 40.7527],
    desc: 'One of the most accessible stations in the system. Elevators connect to the 4, 5, 6, and 7 trains and the Shuttle. Street-level access from multiple corners on 42nd St.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'Times Sq – 42 St',
    address: '42nd St & 7th Ave, Manhattan',
    coordinates: [-73.9875, 40.7580],
    desc: 'ADA-accessible station serving the 1, 2, 3, 7, N, Q, R, and S lines. Multiple elevator banks connect all levels. One of the busiest accessible transfer points in the city.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'Fulton Center',
    address: 'Broadway & Fulton St, Manhattan',
    coordinates: [-74.0079, 40.7093],
    desc: 'Fully accessible transit hub serving the 2, 3, 4, 5, A, C, J, and Z lines in Lower Manhattan. Elevators reach all platforms. Connected to the Oculus and Brookfield Place via underground walkways.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: '34 St – Penn Station (1/2/3)',
    address: '7th Ave & 34th St, Manhattan',
    coordinates: [-73.9989, 40.7506],
    desc: 'ADA-accessible station with elevator access to all platforms. Adjacent to Penn Station and Madison Square Garden. Also connects to the A, C, and E lines one block east.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'Atlantic Av – Barclays Ctr',
    address: 'Flatbush Ave & Atlantic Ave, Brooklyn',
    coordinates: [-73.9776, 40.6840],
    desc: 'Brooklyn\'s largest accessible transit hub serving the 2, 3, 4, 5, B, D, N, Q, and R trains. Multiple elevator banks connect all platforms to street level on both sides of the intersection.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'Jamaica Center – Parsons/Archer',
    address: 'Archer Ave & Sutphin Blvd, Queens',
    coordinates: [-73.8017, 40.7025],
    desc: 'Fully accessible terminal station for the E, J, and Z trains in Queens. Elevators serve all levels. The adjacent Jamaica AirTrain station provides accessible connection to JFK Airport.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'Fordham Rd (B/D)',
    address: 'Grand Concourse & Fordham Rd, The Bronx',
    coordinates: [-73.8896, 40.8618],
    desc: 'ADA-accessible station in the central Bronx with elevator access to the B and D lines. Located near Fordham University and major bus connections across the borough.',
    link: 'https://new.mta.info/accessibility/stations'
  },
  {
    type: 'subway',
    name: 'St. George – SIR',
    address: 'Richmond Terrace, Staten Island',
    coordinates: [-74.0740, 40.6435],
    desc: 'The main accessible transit hub for Staten Island, served by the Staten Island Railway. Directly adjacent to the Staten Island Ferry terminal for a step-free connection to Manhattan.',
    link: 'https://new.mta.info/accessibility/stations'
  },

  // ── FERRY TERMINALS ──
  {
    type: 'ferry',
    name: 'Whitehall Terminal – Staten Island Ferry',
    address: '4 South St, Manhattan',
    coordinates: [-74.0131, 40.7016],
    desc: 'The Manhattan departure point for the free Staten Island Ferry. Fully ADA-accessible with ramps, elevators, and accessible seating throughout. The ferry itself accommodates wheelchairs on all vessels.',
    link: 'https://www.siferry.com'
  },
  {
    type: 'ferry',
    name: 'St. George Ferry Terminal',
    address: '1 Bay St, Staten Island',
    coordinates: [-74.0739, 40.6428],
    desc: 'The Staten Island terminal for the free Staten Island Ferry. Fully ADA-accessible with ramp boarding on all decks. Connects directly to the St. George SIR subway station.',
    link: 'https://www.siferry.com'
  },
  {
    type: 'ferry',
    name: 'Pier 11 / Wall St – NYC Ferry',
    address: 'Pier 11, South St, Manhattan',
    coordinates: [-74.0091, 40.7030],
    desc: 'NYC Ferry hub serving multiple routes from Lower Manhattan. Fully accessible boarding ramps and gangways. Routes include East River, South Brooklyn, and Rockaway lines.',
    link: 'https://www.ferry.nyc/accessibility/'
  },
  {
    type: 'ferry',
    name: 'E 34th St – NYC Ferry',
    address: 'East 34 St & FDR Dr, Manhattan',
    coordinates: [-73.9720, 40.7444],
    desc: 'Accessible NYC Ferry stop on the East River route in Midtown. Ramped gangway access for wheelchairs. Connects to the East Side of Manhattan near major medical centers.',
    link: 'https://www.ferry.nyc/accessibility/'
  },
  {
    type: 'ferry',
    name: 'Greenpoint – NYC Ferry',
    address: 'India St, Brooklyn',
    coordinates: [-73.9557, 40.7321],
    desc: 'Accessible NYC Ferry landing in North Brooklyn. Serves the East River route with step-free ramp access. Connects Brooklyn neighborhoods to Midtown and Lower Manhattan without subway transfers.',
    link: 'https://www.ferry.nyc/accessibility/'
  },

  // ── WAV TAXI / RIDESHARE ──
  {
    type: 'taxi',
    name: 'NYC Accessible Dispatch – TLC',
    address: '33 Beaver St, Manhattan',
    coordinates: [-74.0117, 40.7046],
    desc: 'The NYC Taxi & Limousine Commission\'s Accessible Dispatch program guarantees wheelchair-accessible yellow taxis citywide at standard metered rates. Call 646-599-9999 to dispatch a WAV taxi anywhere in the five boroughs.',
    link: 'https://www.nyc.gov/site/tlc/passengers/accessible-dispatch.page'
  },
  {
    type: 'taxi',
    name: 'Uber WAV – Available Citywide',
    address: 'Request via the Uber app',
    coordinates: [-73.9857, 40.7484],
    desc: 'Uber WAV (Wheelchair Accessible Vehicle) provides on-demand rides in vehicles with ramps or lifts at standard UberX prices. Available in NYC through the Uber app — select "WAV" in the ride options. No additional charge over standard rates.',
    link: 'https://www.uber.com/us/en/ride/uberwav/'
  },
  {
    type: 'taxi',
    name: 'Lyft Access Mode – Available Citywide',
    address: 'Request via the Lyft app',
    coordinates: [-73.9710, 40.7614],
    desc: 'Lyft Access provides wheelchair-accessible vehicle options in NYC. Request through the Lyft app by selecting the Access ride type. Lyft also offers subsidized rides for eligible NYC residents through its Lyft Up Access program.',
    link: 'https://www.lyft.com/accessibility'
  },

  // ── ACCESS-A-RIDE ──
  {
    type: 'aar',
    name: 'AAR Assessment Center – Manhattan',
    address: '3 Stone St, New York, NY 10004',
    coordinates: [-74.0115, 40.7049],
    desc: 'Opened October 2024. Screens applicants for Access-A-Ride eligibility — the MTA\'s 24/7 door-to-door paratransit service. Free AAR rides to and from your appointment are available. Call 877-337-2017 to schedule.',
    link: 'https://www.mta.info/accessibility/access-a-ride'
  },
  {
    type: 'aar',
    name: 'AAR Assessment Center – Brooklyn',
    address: '130 Livingston St, Brooklyn, NY 11201',
    coordinates: [-73.9897, 40.6919],
    desc: 'Home to the MTA Department of Paratransit headquarters and Brooklyn AAR assessment services. Eligibility appeals and formal correspondence are also handled at this location. Appointments required.',
    link: 'https://www.mta.info/accessibility/access-a-ride'
  },
  {
    type: 'aar',
    name: 'AAR Assessment Center – The Bronx',
    address: '1811 Hone Ave, The Bronx, NY',
    coordinates: [-73.8698, 40.8534],
    desc: 'Bronx assessment site for Access-A-Ride eligibility. Includes an in-person interview with a healthcare professional and functional mobility testing. Walk-ins are not accepted — appointments only.',
    link: 'https://www.mta.info/accessibility/access-a-ride'
  },
  {
    type: 'aar',
    name: 'AAR Assessment Center – Queens',
    address: 'Jamaica, Queens, NY',
    coordinates: [-73.7955, 40.7019],
    desc: 'Queens-based Access-A-Ride assessment center with multilingual staff available. The MTA assigns appointments to the center closest to the applicant\'s borough of residence. Call 877-337-2017.',
    link: 'https://www.mta.info/accessibility/access-a-ride'
  },
  {
    type: 'aar',
    name: 'AAR Assessment Center – Staten Island',
    address: '101 Ellis St, Staten Island, NY',
    coordinates: [-74.2557, 40.5082],
    desc: 'Staten Island assessment center for Access-A-Ride applications and recertifications. Applicants may be assigned here based on availability and borough of residence.',
    link: 'https://www.mta.info/accessibility/access-a-ride'
  }

];

// ── Map setup ─────────────────────────────────────────────────────────────
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-73.97, 40.72],
  zoom: 10.5,
  pitch: 0,
  bearing: 0
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// ── Build popup HTML ──────────────────────────────────────────────────────
function buildPopup(loc) {
  const cfg = TYPE_CONFIG[loc.type];
  return `
    <div class="popup-header" style="background:${cfg.color}"></div>
    <div class="popup-body">
      <div class="popup-type" style="color:${cfg.color}">${cfg.label}</div>
      <div class="popup-name">${loc.name}</div>
      <div class="popup-addr">${loc.address}</div>
      <div class="popup-desc">
        ${loc.desc}
        <br>
        <a class="popup-link" href="${loc.link}" target="_blank"
           rel="noopener" style="color:${cfg.color}">
          Learn more →
        </a>
      </div>
    </div>`;
}

// ── Fly to + popup ────────────────────────────────────────────────────────
let activePopup = null;
let markerRefs = [];  // store markers so we can show/hide them

function flyTo(loc, idx) {
  document.querySelectorAll('.loc-item').forEach(function(el) {
    el.classList.remove('active');
  });
  document.querySelectorAll('.loc-item')[idx].classList.add('active');

  map.flyTo({
    center: loc.coordinates,
    zoom: 14.5,
    pitch: 30,
    bearing: 0,
    duration: 1600,
    essential: true
  });

  if (activePopup) activePopup.remove();

  activePopup = new mapboxgl.Popup({ offset: 30, closeButton: true })
    .setLngLat(loc.coordinates)
    .setHTML(buildPopup(loc))
    .addTo(map);
}

// ── Add markers ───────────────────────────────────────────────────────────
map.on('load', function() {
  locations.forEach(function(loc, idx) {
    const cfg = TYPE_CONFIG[loc.type];

    const marker = new mapboxgl.Marker({ color: cfg.color })
      .setLngLat(loc.coordinates)
      .addTo(map);

    marker.getElement().style.cursor = 'pointer';

    marker.getElement().addEventListener('click', function() {
      flyTo(loc, idx);
    });

    // Store reference for filtering
    markerRefs.push({ marker: marker, type: loc.type });
  });
});

// ── Build sidebar list ────────────────────────────────────────────────────
const listEl = document.getElementById('loc-list');

locations.forEach(function(loc, idx) {
  const cfg = TYPE_CONFIG[loc.type];
  const item = document.createElement('div');
  item.className = 'loc-item';
  item.dataset.type = loc.type;

  item.innerHTML = `
    <div class="loc-bar" style="background:${cfg.color}"></div>
    <div class="loc-body">
      <div class="loc-name">${loc.name}</div>
      <div class="loc-addr">${loc.address}</div>
      <span class="loc-tag" style="background:${cfg.color}">${cfg.label}</span>
    </div>`;

  item.addEventListener('click', function() {
    flyTo(loc, idx);
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  listEl.appendChild(item);
});

// ── Filter buttons ────────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const type = btn.dataset.type;

    // Update active button state
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');

    // Show/hide sidebar items
    document.querySelectorAll('.loc-item').forEach(function(item) {
      if (type === 'all' || item.dataset.type === type) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    // Show/hide markers on map
    markerRefs.forEach(function(ref) {
      if (type === 'all' || ref.type === type) {
        ref.marker.getElement().style.display = '';
      } else {
        ref.marker.getElement().style.display = 'none';
      }
    });

    // Close any open popup when filtering
    if (activePopup) {
      activePopup.remove();
      activePopup = null;
    }
  });
});