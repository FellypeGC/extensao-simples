const form = document.querySelector('form');

const replaceImages = () => {
    document.body.style.background = 'red';
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const [tab] = await edge.tabs.query({ active: true, currentWindow: true});

    edge.scripting.executeScript({
        target: { tabId: tab.id},
        function: replaceImages,
    });

});