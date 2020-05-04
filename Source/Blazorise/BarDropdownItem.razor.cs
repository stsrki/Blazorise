﻿#region Using directives
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
#endregion

namespace Blazorise
{
    public partial class BarDropdownItem : BaseComponent
    {
        #region Members

        private BarMode mode;

        #endregion

        #region Methods

        protected override void BuildClasses( ClassBuilder builder )
        {
            builder.Append( ClassProvider.BarDropdownItem( Mode ) );

            base.BuildClasses( builder );
        }

        protected void ClickHandler()
        {
            Clicked.InvokeAsync( null );
        }

        #endregion

        #region Properties

        /// <summary>
        /// Occurs when the item is clicked.
        /// </summary>
        [Parameter] public EventCallback Clicked { get; set; }

        [Parameter] public RenderFragment ChildContent { get; set; }

        [Parameter] public string To { get; set; }

        [Parameter] public Match Match { get; set; } = Match.All;

        [Parameter] public string Title { get; set; }

        [CascadingParameter( Name = "Mode" )] protected BarMode Mode
        {
            get => mode;
            set
            {
                mode = value;

                DirtyClasses();
            }
        }

        #endregion
    }
}
