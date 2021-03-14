﻿#region Using directives
using System.Threading.Tasks;
using Blazorise.Utilities;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
#endregion

namespace Blazorise
{
    public partial class RatingItem : BaseComponent
    {
        #region Members

        #endregion

        #region Methods

        protected override void BuildClasses( ClassBuilder builder )
        {
            var selected = Rating.IsSelected( Value );
            var hovered = Rating.IsHovered( Value );

            builder.Append( ClassProvider.RatingItem() );
            builder.Append( ClassProvider.RatingItemColor( Color ), Color != Color.None && ( selected || hovered ) );

            base.BuildClasses( builder );
        }

        protected override void BuildStyles( StyleBuilder builder )
        {
            var selected = Rating.IsSelected( Value );
            var hovered = Rating.IsHovered( Value );

            if ( hovered /*&& !selected*/ )
            {
                builder.Append( "opacity: 0.5;" );
            }

            base.BuildStyles( builder );
        }

        private async Task HandleClick()
        {
            if ( Disabled )
                return;

            IsActive = false;

            if ( Rating.SelectedValue == Value )
            {
                await ItemClicked.InvokeAsync( 0 );
            }
            else
            {
                await ItemClicked.InvokeAsync( Value );
            }
        }

        private async Task HandleMouseOver( MouseEventArgs e )
        {
            if ( Disabled )
                return;

            IsActive = true;

            await ItemHovered.InvokeAsync( Value );
        }

        private async Task HandleMouseOut( MouseEventArgs e )
        {
            if ( Disabled )
                return;

            IsActive = false;

            await ItemHovered.InvokeAsync( null );
        }

        #endregion

        #region Properties

        protected object IconName => Rating.IsSelected( Value )
            ? Rating.FullIcon
            : Rating.EmptyIcon;

        protected IconStyle IconStyle
        {
            get
            {
                if ( Rating.IsSelected( Value ) )
                    return Rating.FullIconStyle ?? IconStyle.Solid;

                if ( Rating.IsHovered( Value ) )
                    return Rating.EmptyIconStyle ?? IconStyle.Regular;

                return Rating.EmptyIconStyle ?? IconStyle.Regular;
            }
        }

        protected bool IsActive { get; set; }

        [CascadingParameter] private Rating Rating { get; set; }

        [Parameter] public int Value { get; set; }

        [Parameter] public Color Color { get; set; } = Color.Warning;

        [Parameter] public bool Disabled { get; set; }

        [Parameter] public bool ReadOnly { get; set; }

        [Parameter] public EventCallback<int> ItemClicked { get; set; }

        [Parameter] public EventCallback<int?> ItemHovered { get; set; }

        #endregion
    }
}
