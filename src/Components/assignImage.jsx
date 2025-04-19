

const assignImage = (pname) => {
    switch (pname.toLowerCase()) {
      case 'wheat':
        return 'https://img.freepik.com/free-photo/field-with-spikelets-close-up-background-with-wheat-spikelets_661209-259.jpg';
      case 'rice':
        return 'https://example.com/rice.jpg';
      default:
        return 'https://via.placeholder.com/150'; // fallback image
    }
  };
  