import { render } from "@testing-library/react";
import Spotlight from ".";

test('renders image and artist', () => {
    const dimensions = { width: 1920, height: 1280 }; 
    const { getByAltText, getByText } = render(
    <Spotlight 
        image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg" 
        artist="dilara irem"
        dimensions={dimensions}
    />);
    
    const image = getByAltText('Spotlight: dilara irem');
    expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent('https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg'))),
  
    expect(getByText('dilara irem')).toBeInTheDocument()
});


