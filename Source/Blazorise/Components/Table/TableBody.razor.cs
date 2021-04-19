﻿#region Using directives
using Blazorise.Utilities;
using Microsoft.AspNetCore.Components;
#endregion

namespace Blazorise
{
    /// <summary>
    /// Table Body element encapsulates a set of table rows, indicating that they comprise the body of the table.
    /// </summary>
    public partial class TableBody : BaseDraggableComponent
    {
        #region Methods

        /// <inheritdoc/>
        protected override void BuildClasses( ClassBuilder builder )
        {
            builder.Append( ClassProvider.TableBody() );

            base.BuildClasses( builder );
        }

        protected override void BuildStyles( StyleBuilder builder )
        {
            builder.Append( $"max-height: {ParentTable.StickyHeaderBodyHeight}", ParentTable?.StickyHeader == true );

            base.BuildStyles( builder );
        }

        #endregion

        #region Properties

        /// <summary>
        /// Specifies the content to be rendered inside this <see cref="TableBody"/>.
        /// </summary>
        [Parameter] public RenderFragment ChildContent { get; set; }

        /// <summary>
        /// Gets or sets the reference to the parent <see cref="Table"/> component.
        /// </summary>
        [CascadingParameter] public Table ParentTable { get; set; }

        #endregion
    }
}
