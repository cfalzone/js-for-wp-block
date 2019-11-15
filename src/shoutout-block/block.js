/**
 * BLOCK: shoutout-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
	MediaUpload,
} = wp.editor;
const { Button } = wp.components;

registerBlockType( 'cgb/block-shoutout-block', {
	title: __( 'my-blocks - Shoutout Block' ), // Block title.
	icon: 'admin-comments', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'my-blocks — Shoutout Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		header: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.shoutout-body',
		},
		imgUrl: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		imgId: {
			type: 'number',
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
	},

	edit: props => {
		const { attributes: { header, body, imgId, imgUrl, imgAlt },
			className, setAttributes } = props;

		const onMediaSelect = img => {
			setAttributes( {
				imgId: img.id,
				imgUrl: img.url,
				imgAlt: img.alt,
			} );
		};

		return (
			<div className={ className }>

				<MediaUpload
					onSelect={ onMediaSelect }
					type="image"
					value={ imgId }
					render={ ( { open } ) => (
						imgId ? (
							<img src={ imgUrl } onClick={ open } alt={ imgAlt } />
						) : (
							<Button onClick={ open }>
								{ __( 'Choose an Image', 'my-blocks' ) }
							</Button>
						)
					) } />
				
				<div className="shoutout-content">
					<RichText
						tagName="h2"
						placeholder={ __( 'Enter header text', 'my-blocks' ) }
						value={ header }
						multiline={ false }
						formattingControls={ [] }
						onChange={ h => setAttributes( { header: h } ) } />

					<RichText
						tagName="div"
						className="shoutout-body"
						placeholder={ __( 'Enter body text', 'my-blocks' ) }
						value={ body }
						multiline="p"
						onChange={ b => setAttributes( { body: b } ) } />
				</div>
			</div>
		);
	},

	save: props => {
		const { attributes: { header, body, imgUrl, imgAlt },
			className } = props;

		return (
			<div className={ className }>
				{ imgUrl ? (
					<img src={ imgUrl } alt={ imgAlt } />
				) : null }
				<div className="shoutout-content">
					<h2>{ header }</h2>
					<div className="shoutout-body">{ body }</div>
				</div>
			</div>
		);
	},
} );
