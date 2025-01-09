const events = [
    {
      year: "1666",
      description: "The Great Fire of London started in a bakery on Pudding Lane. It destroyed much of the city over four days.",
      image: "images/fire_of_london.jpg",
    },
    {
      year: "1789",
      description: "The U.S. Department of the Treasury was established, laying the foundation for the country's financial system.",
      image: "images/us_treasury.jpg",
    },
    {
      year: "1939",
      description: "World War II escalated as the Free City of Danzig (now Gdańsk, Poland) surrendered to Germany.",
      image: "images/ww2_danzig.jpg",
    },
    {
      year: "1945",
      description: "Japan officially surrendered aboard the USS Missouri, marking the end of World War II.",
      image: "images/ww2_surrender.jpg",
    },
    {
      year: "1969",
      description: "The first Automated Teller Machine (ATM) in the United States was installed, revolutionizing banking.",
      image: "images/first_atm.jpg",
    },
  ];
  
  function showEvent(index) {
    const event = events[index - 1];
    document.getElementById("event-title").innerText = event.year;
    document.getElementById("event-description").innerText = event.description;
    document.getElementById("event-image").src = event.image;
  }
  