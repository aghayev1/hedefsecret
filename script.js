let records = [];

    async function loadFile() {
      try {
        const response = await fetch('main.txt');
        const text = await response.text();
        
        const lines = text.trim().split('\n');
        records = lines.map(line => {
          const [id, name, surname, grade, sector] = line.trim().split(/\s+/);
          return { id, name, surname, grade, sector };
        });

        console.log("File loaded successfully!", records);
      } catch (error) {
        console.error("Error loading file:", error);
      }
    }

    async function findInfo() {
      const name = document.getElementById('name').value.toLocaleUpperCase('az').trim();
      const surname = document.getElementById('surname').value.toLocaleUpperCase('az').trim();
      const resultCard = document.getElementById('result-card');
      
      const record = records.find(item => item.name.trim() === name && item.surname.trim() === surname);


      if (record) {
        resultCard.innerHTML = `
          <h2>Information</h2>
          <p><strong>ID:</strong> ${record.id}</p>
          <p><strong>Grade:</strong> ${record.grade}</p>
          <p><strong>Sector:</strong> ${record.sector}</p>
        `;
        resultCard.classList.add('visible');
      //   try {
      //     const apiUrl = 'https://imtahanim.net';
      //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';  // Proxy URL
          
      //     const payload = new URLSearchParams();
      //     payload.append('ajax', 'submit');
      //     payload.append('TxtExamCheck[code]', record.id);  // Make sure `record.id` is correct
          
      //     const response = await fetch(apiUrl, {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/x-www-form-urlencoded'
      //       },
      //       body: payload.toString(),
      //     });

      //     const html = await response.text();
      //     const parser = new DOMParser();
      //     const doc = parser.parseFromString(html, 'text/html');
          
      //     const links = doc.querySelectorAll('a.btn.btn-xs.btn-primary.waves-effect.waves-light');
          
      //     resultCard.innerHTML = `<h2>Available Links</h2>`;
      //     links.forEach(link => {
      //       const button = document.createElement('button');
      //       button.innerText = link.innerText;
      //       button.onclick = () => window.open(link.href, '_blank');
      //       resultCard.appendChild(button);
      //     });
          
      //     resultCard.classList.add('visible');
      //   } catch (error) {
      //     resultCard.innerHTML = `<p>Failed to fetch data from the website</p>`;
      //     resultCard.classList.add('visible');
      //     console.error("API Request Failed:", error);
      //   }
      } else {
        resultCard.innerHTML = `<p>No record found</p>`;
        resultCard.classList.add('visible');
      }
    }

    window.onload = loadFile;
