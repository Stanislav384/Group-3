let more_button = document.querySelector('.more-button')
let category_buttons = document.querySelectorAll('.category-button')

more_button.addEventListener('click', () => {
    category_buttons.forEach(btn => {
        btn.classList.toggle('hidden');
    });

    more_button.textContent = more_button.textContent === 'ᐳ' ? 'ᐸ' : 'ᐳ';
});

let media_items = document.querySelectorAll('.media-div')

media_items.forEach(item =>{
    item.addEventListener('click', () => {
        let album_img_tag = item.querySelector('.album-img');
        let song_img_tag = item.querySelector('.song-img')

        let cover_img_src = album_img_tag
        ? album_img_tag.src 
        : song_img_tag
        ? song_img_tag.src
        : "default.jpg";

        let song_name = item.querySelector('.main-info').textContent;
        let artist_info = item.querySelector('.other-info').textContent;

        media_items.forEach(div =>{
            div.style.backgroundColor = "";
        });

    item.style.backgroundColor = "#232323";

    let artist_data = {
        "2ugly": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7280.JPG',
            artist_name: 'Hotel Ugly',
            listerners: '15 998 046',
            about: 'Hotel Ugly - an idie-pop project from Houston, Texas, founded in 2019 by brothers Mike and Chris Fissella. After Christ left in 2022, Mike continued solo as Mike Vince. Song "Shut Up My Moms Calling" became a TikTok hit and charted on BillBoard. In 2023, they released their debut full album Ugly Duck.'
        },
        "UTOPIA": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7291.JPG',
            artist_name: 'Travis Scott',
            listerners: '65 160 499',
            about: 'Travis Scott - a highly influential American rapper, singer, and producer known for his unique blend of hip-hop, trap, and psychedelic sounds. He rose to fame with hits like "sicko Mode", "Goosebumps", and his acclaimed album Astroworld. In April 2020, Travis Scott made history by hosting the qrondbreaking virtual concert "Astronomical" inside the popular game Fortnite. The event attracted over 12 million players.'

        },
        "Doo-Wops & Hooligans": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7290.JPG',
            artist_name: 'Bruno Mars',
            listerners: '151 079 821',
            about: 'Bruno Mars - a Grammy-winning American singer known for hits like Uptown Funk, 24k Magic, and That`s What I Like. He mixed pop, funk, and R&B with a retro vibes. In 2021, he formed Silk Sonic with Anderson. Paak and released "Leave The Door Open".'
        },
        "IGOR": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7286.JPG',
            artist_name: 'Tyler, The Creator',
            listerners: '49 370 644',
            about: 'Tyler, The Creator - an American rapper, producer, and designer known for his creativity, bold style, and ger-blending music. He rose to fame with the group "Odd Future" and later became a solo star with albums like "IGOR" and "Call Me If You Get Lost". He won 2 Grammy Awards and is known for his experimental sound, storytelling, and fashion influence. Tyler is one of the most original voices in modern hip-hop.'
        },
        "Graduation": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7292.JPG',
            artist_name: 'Kanye West',
            listerners: '66 788 810',
            about: 'Kanye West (also known as Ye) - an American rapper, producer, and fashion designer. He`s one of the most influentilal artist in hip-hop, known for albums "The College Dropout","My Beautiful Dark Twisted Fantazy", and "Graduation". Kanye West has won 24 Gammy Awards and is famous for constantly reinventing his sond ald pushing creative boundaries. He`s also made a big impact on fashion with his "Yeezy" brand.'
        },
        "Smells Like Teen Spirit": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7287.JPG',
            artist_name: 'Nirvana',
            listerners: '34 321 467',
            about: 'Nirvana - American rock band formed in 1987, fronted by Kurt Cobain. They became global icons of the grunge movement with hits "Smells Like Teen Spirit", "Come As You Are", "Lithium". Their 1991 album "Nevermind" changed rock music forever. Despite disblanding after Cobain`s death in 1994, Nirvana remains one of the most influenial bands in history.'
        },
        "Bad Habit": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7283.JPG',
            artist_name: 'Steve Lacy',
            listerners: '23 848 777',
            about: 'Steve Lacy - American singer, guitar player, and producer known for blending R&B, funk, and indie rock. He firts gained attention as a member of "The Internet", then launched a solo career. His hit "Bad Habit"(2022) became a viral success and topped Billboard Hot 100. Lacy is known for his DIY style - he started producing music on his IPhone in GarageBand.'
        },
        "505": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7288.JPG',
            artist_name: 'Arctic Monkeys',
            listerners: '54 366 109',
            about: 'Arctic Monkeys - British rock band formed in 2002 in Sheffield. They became famous with their debut album "Whatever People Say I Am", "That`s What I`m Not"(2006), featuring hits like "I Bet You Look Good On The Dancefloor". They`re known for their sharp lyrics, evolving sound, and frontman Alex Turner. Their 2013 album "AM" includes global hits like "Do I Wanna Know?" and "R U Mine?". They`re one of the most successful UK bands of the 21th century.'
        },
        "Nangs": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7289.JPG',
            artist_name: 'Tame Impala',
            listerners: '24 736 304',
            about: 'Tame impala - psychedelic music project of Australian musician Kevin Parker. He writes, records, and produced all the music himself. Known for dreamy, synth-heavy tracks like "The Less I Know The Better", "Let It Happen", and "Feels Like We Only Go Backwards", Tame Impala blends rock, pop, and electronic sounds. His album "Currents"(2015) brought global fame, and "The Slow Rush"(2020) cemented his status as a modern psyhedelic icon.'
        },
        "Stimulate": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7285.JPG',
            artist_name: 'Eminem',
            listerners: '67 401 597',
            about: 'Eminem - American rapper, songwriter, and producer known for his fast flow, sharp lyrics, and emotional storytelling. He rose to fame with "The Slim Shady LP"(1999) and became one of the best-selling artist ever. His hits include "Lose Yourself, Stan, Without Me", and "Love The Way You Lie". HE won 15 Grammy Awards and is considered a rap legend.'
        },
        "The World We Knew": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7284.JPG',
            artist_name: 'Frank Sinatra',
            listerners: '16 492 996',
            about: 'Frank Sinatra - American singer and actor, known as one of the greatest vocalists of all time. His smooth voice and timeless hits like "Fly To The Moon", "My Way", and "New York", made him a global icon. Active from the 1940s to the 1990s, he won 9 Grammy Awards and starred in many classic films.'
        },
        "It Was A Good Day": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7281.JPG',
            artist_name: 'Ice Cube',
            listerners: '16 962 454',
            about: 'Ice Cube - American rapper, actor, and filmmaeker. He rose to fame with the legendary rap group N.W.A, known fo pioneering gangsta rap with tracks like "Straight Outta Compton". As a solo artist, he released classic albums like "The Predactor" and "Death Certificate". He`s also known for acting in films "Friday" and "Barbershop".'
        },
        "Do For Love": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7282.JPG',
            artist_name: '2Pac',
            listerners: '24 717 584',
            about: '2Pac (Tupac Shakur) - American rapper, actor, and activist. He`s known for powerful songs like "CHanges", "Hit `Em Up", and "California Love", blending social commentary with raw emotion. A key figure in 1990s hip-hop, 2Pac remains one of the most influential rappers of all time. He was killed in 1996 at age 25 but his legacy lives on.'
        },
        "Can't Stop": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7293.JPG',
            artist_name: 'Red Hot Chili Peppers',
            listerners: '40 554 749',
            about: 'Red Hot Chilly Peppers = American rock band formed in Los Angeles in 1983. Known fo blending rock, funk, ang punk, they became famous with hits like "Californation", "Under The Bridge", and "Scar Tissue". Fronted by Anthony Kiedis, the band has won multiple Grammys and is one of the best-selling bands of all time.'
        },
        "Smooth Operator": {
            song_img: 'C:\Users\Helena\Desktop\project_html\project1\photos\IMG_7298.JPG',
            artist_name: 'Sade',
            listerners: '18 418 310',
            about: 'Sade - a British band fronted by singer Sade Adu, known fo their smooth blend of soul, jazz, and R&B. They rose to fame in the 1980s with hits "Smooth Operator" and "No Ordinary love". Their music is celebrated fo its calm, elegant vibe and timeless appeal.'
        }
    };
    let artist = artist_data[song_name];

    if (artist) {
        document.querySelector('.song-card').src = cover_img_src;
        document.querySelector('.song-name').textContent = song_name;
        document.querySelector('.song-artist').textContent = artist_info;

        document.querySelector('.artist-img').src = artist.artist_img;
        document.querySelector('.artist-name').textContent = artist.artist_name;
        document.querySelector('.listerners-text').textContent = `${artist.listerners} listerners per month`;
        document.querySelector('.important-info').textContent = artist.about;
    }else {
        console.warn('Немає даних для пісні');
    }
    });
});