import { CSS, styled, theme } from "../../../../../stitches.config";

const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 24
} as CSS)

const SadEmojiImage = styled('img');

const ContentArea = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
} as CSS)

const WarningText = styled('span', {
    color: '$tertiary',
    fontWeight: '$bold',
    fontSize: '$long',
    textAlign: 'left',
    width: '66%'
} as CSS)

const Button = styled('button', {
    color: '$white',
    backgroundColor: '$primary200',
    border: 'none',
    borderRadius: 4,
    boxShadow: `0px 4px 10px ${theme.colors.black.value}04`,
    padding: 16,
    fontSize: 16,
    fontWeight: '$bold',
    alignSelf: 'flex-start'
} as CSS)

export {
    Button,
    Container,
    ContentArea,
    SadEmojiImage,
    WarningText
}