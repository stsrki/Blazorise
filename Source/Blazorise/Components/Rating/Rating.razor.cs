﻿#region Using directives
using System.Threading.Tasks;
using Blazorise.Utilities;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
#endregion

namespace Blazorise
{
    /// <summary>
    /// Ratings provide insight regarding others opinions and experiences with a product.
    /// </summary>
    public partial class Rating : BaseComponent
    {
        #region Members

        private int selectedValue = 0;

        private int? hoveredValue = null;

        private bool hovering;

        private Color color = Color.Warning;

        #endregion

        #region Methods

        protected override void BuildClasses( ClassBuilder builder )
        {
            builder.Append( ClassProvider.Rating() );

            base.BuildClasses( builder );
        }

        protected virtual Task HandleItemClicked( int value )
        {
            SelectedValue = value;

            if ( value == 0 )
            {
                HoveredValue = null;
            }

            return Task.CompletedTask;
        }

        protected virtual Task HandleItemHovered( int? value )
        {
            HoveredValue = value;

            return Task.CompletedTask;
        }

        protected virtual Task OnMouseOverHandler( MouseEventArgs eventArgs )
        {
            hovering = true;

            return Task.CompletedTask;
        }

        protected virtual Task OnMouseOutHandler( MouseEventArgs eventArgs )
        {
            hovering = false;

            return Task.CompletedTask;
        }

        internal protected bool IsSelected( int value )
            => value >= 1 && value <= SelectedValue;

        internal protected bool IsHovered( int value )
           => hovering
            && (
            ( value >= SelectedValue && value <= HoveredValue )
            ||
            ( value >= HoveredValue && value <= SelectedValue ) );

        #endregion

        #region Properties

        /// <summary>
        /// User class names for RatingItems, separated by space
        /// </summary>
        [Parameter] public string RatingItemsClass { get; set; }

        /// <summary>
        /// User styles for RatingItems.
        /// </summary>
        [Parameter] public string RatingItemsStyle { get; set; }

        /// <summary>
        /// Maximum rating value that is allowed to be selected.
        /// </summary>
        [Parameter] public int MaxValue { get; set; } = 5;

        /// <summary>
        /// Defines the selected icon name.
        /// </summary>
        [Parameter] public object FullIcon { get; set; } = IconName.Star;

        /// <summary>
        /// Defines the non-selected icon name.
        /// </summary>
        [Parameter] public object EmptyIcon { get; set; } = IconName.Star;

        /// <summary>
        /// Defines the selected icon style.
        /// </summary>
        [Parameter] public IconStyle? FullIconStyle { get; set; } = IconStyle.Solid;

        /// <summary>
        /// Defines the non-selected icon style.
        /// </summary>
        [Parameter] public IconStyle? EmptyIconStyle { get; set; } = IconStyle.Regular;

        /// <summary>
        /// Prevent the user interactions and make it appear lighter.
        /// </summary>
        [Parameter] public bool Disabled { get; set; }

        /// <summary>
        /// Prevent the user interactions and make it appear normal.
        /// </summary>
        [Parameter] public bool ReadOnly { get; set; }

        /// <summary>
        /// Not work now
        /// </summary>
        [Parameter]
        public Color Color
        {
            get => color;
            set
            {
                if ( color == value )
                    return;

                color = value;

                DirtyClasses();
            }
        }
        /// <summary>
        /// Not work now
        /// </summary>
        [Parameter] public Size Size { get; set; } = Size.Medium;

        /// <summary>
        /// Gets or sets the currently selected rating value.
        /// </summary>
        [Parameter]
        public int SelectedValue
        {
            get => selectedValue;
            set
            {
                if ( selectedValue == value )
                    return;

                selectedValue = value;

                SelectedValueChanged.InvokeAsync( selectedValue );
            }
        }

        /// <summary>
        /// Occurs after the <see cref="SelectedValue"/> has changed.
        /// </summary>
        [Parameter] public EventCallback<int> SelectedValueChanged { get; set; }

        /// <summary>
        /// Gets or sets the currently hovered rating value.
        /// </summary>
        internal int? HoveredValue
        {
            get => hoveredValue;
            set
            {
                if ( hoveredValue == value )
                    return;

                hoveredValue = value;
                HoveredValueChanged.InvokeAsync( value );
            }
        }

        /// <summary>
        /// Occurs after the <see cref="HoveredValue"/> has changed.
        /// </summary>
        [Parameter] public EventCallback<int?> HoveredValueChanged { get; set; }

        #endregion
    }
}
