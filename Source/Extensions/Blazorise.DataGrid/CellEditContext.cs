﻿#region Using directives
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace Blazorise.DataGrid
{
    /// <summary>
    /// Context for editors in datagrid cell.
    /// </summary>
    public class CellEditContext
    {
        /// <summary>
        /// Gets or sets the editor value.
        /// </summary>
        public object CellValue { get; set; }
    }

    /// <summary>
    /// Abstraction of <see cref="CellEditContext"/> that holds the reference to the model being edited.
    /// </summary>
    /// <typeparam name="TItem"></typeparam>
    public class CellEditContext<TItem> : CellEditContext
    {
        /// <summary>
        /// Method that will be called when cell is manually updated.
        /// </summary>
        private readonly Action<string, object> CellUpdated;

        /// <summary>
        /// Initializes a new instance of the <see cref="CellEditContext{TItem}"/>.
        /// </summary>
        /// <param name="item">An item to which this cell belongs.</param>
        /// <param name="cellUpdated">Method that will be called when cell is manually updated.</param>
        public CellEditContext( TItem item, Action<string, object> cellUpdated )
        {
            Item = item;
            CellUpdated = cellUpdated;
        }

        /// <summary>
        /// Gets the reference to the model that is currently in edit mode.
        /// <para>
        /// Note that this model is used only for reading 
        /// and you should never update it directly or any of it's field members.
        /// For writing the edited value you must use <see cref="CellEditContext.CellValue"/>.
        /// </para>
        /// </summary>
        public TItem Item { get; }

        /// <summary>
        /// Updated the cell of the current editing item that matches the <paramref name="fieldName"/>.
        /// </summary>
        /// <param name="fieldName">Cell field name.</param>
        /// <param name="value">New cell value.</param>
        public void UpdateCell( string fieldName, object value )
        {
            CellUpdated?.Invoke( fieldName, value );
        }
    }
}
