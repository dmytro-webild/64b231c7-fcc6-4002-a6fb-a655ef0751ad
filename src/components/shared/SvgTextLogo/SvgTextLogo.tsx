import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  dominantBaseline?: 'auto' | 'baseline' | 'hanging' | 'ideographic' | 'mathematical' | 'middle';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 72,
  fontWeight = 700,
  letterSpacing = 0,
  dominantBaseline = 'middle',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const totalWidth = textLength * charWidth + (textLength - 1) * letterSpacing;
  const padding = 20;
  const width = totalWidth + padding * 2;
  const height = fontSize + padding * 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x={padding}
        y={height / 2}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        dominantBaseline={dominantBaseline}
        textAnchor="start"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
