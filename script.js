// Toggle Projects section dark/light mode
const projectToggle = document.getElementById('projectToggle');
const projectsSection = document.getElementById('projects');

projectToggle.addEventListener('change', () => {
    if(projectToggle.checked) {
        projectsSection.classList.remove('dark-project');
        projectsSection.classList.add('light-project');
    } else {
        projectsSection.classList.remove('light-project');
        projectsSection.classList.add('dark-project');
    }
});
