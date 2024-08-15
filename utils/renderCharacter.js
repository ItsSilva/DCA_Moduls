//const appendListItems = (parent) => (element) => {
//    const li = document.createElement('li');
//    li.textContent = element;
//    parent.appendChild(li);
//}

export const renderCharacter = ({name, thumbnail, description, comics, series}) => {
    // Create the container
    const container = document.createElement('figure');
    container.className = 'character-card';

    // Create the elements
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const h3Comics = document.createElement('h3');
    const ulComics = document.createElement('ul');
    const h3Series = document.createElement('h3');
    const ulSeries = document.createElement('ul');

    // Add the data to the elements
    img.src = thumbnail;
    h2.textContent = name;
    p.textContent = description;
    h3Comics.textContent = 'Comics: ';
    h3Series.textContent = 'Series: ';

    //comics.forEach(appendListItems(ulComics));
    //series.forEach(appendListItems(ulSeries));

    comics.forEach(comic => {
        const li = document.createElement('li');
        li.textContent = comic;
        ulComics.appendChild(li);
    });

    series.forEach(serie => {
        const li = document.createElement('li');
        li.textContent = serie;
        ulSeries.appendChild(li);
    });

    // Create the list of elements
    container.appendChild(img);
    container.appendChild(h2);
    container.appendChild(p);
    container.appendChild(h3Comics);
    container.appendChild(ulComics);
    container.appendChild(h3Series);
    container.appendChild(ulSeries);

    // Return the container
    return container;
}