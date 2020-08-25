import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
    return (
        <>
            <Heading fontSize="h2">HTML UND CSS FÜRS BACKEND</Heading>
            <Text>Aktuell dominiert Chrome die Landschaft. Dessen Engine <mark>Blink</mark> basiert auf <mark>Webkit</mark>, das zu Beginn eine Linux-Entwicklung war (KDE). Webkit treibt nur noch Safari (macOS und iOS) an. </Text>
            <Text>Blink wird auch von Opera und Vivaldi genutzt. Es gibt aber keine zwangsweise Parität in der Engine-Version zwischen diesen Browsern.</Text>
            <Text>Ausserdem gibt es noch Chromium, das die Basis des Android-Browser und weiterer unterschiedlicher <mark>Browser auf Android</mark> ist. Demnächst treibt es auch MS Edge an.</Text>
        </>
    );
}
export default SubHeading;